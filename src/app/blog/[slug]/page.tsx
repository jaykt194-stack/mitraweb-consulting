import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { blogData } from "@/data/blogData";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  Tag,
  User,
  CheckCircle2,
} from "lucide-react";

interface BlogArticleProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogArticleProps): Metadata {
  const post = blogData.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mitraweb Consulting Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
    },
  };
}

export default function BlogArticlePage({ params }: BlogArticleProps) {
  const post = blogData.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="bg-white">
      <JsonLd type="Article" data={post} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/40 pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Published: {post.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="pt-4 flex items-center gap-3 border-t border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                MW
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{post.author.name}</div>
                <div className="text-[11px] text-slate-500">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & TOC */}
      <section className="py-12 lg:py-20 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Article Body */}
            <div className="lg:col-span-8 space-y-10">
              {/* Table of Contents Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Table of Contents
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {post.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a
                        href={`#${toc.id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center gap-2"
                      >
                        <span className="text-slate-400">&bull;</span>
                        <span>{toc.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Content Paragraphs */}
              <div className="space-y-8">
                {post.content.map((sec, i) => {
                  const tocMatch = post.tableOfContents[i];
                  return (
                    <section key={i} id={tocMatch?.id} className="space-y-3 scroll-mt-28">
                      <h2 className="text-xl font-bold text-slate-900 leading-snug">
                        {sec.heading}
                      </h2>
                      {sec.body.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base text-slate-700 leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </section>
                  );
                })}
              </div>

              {/* Related Internal Cross-links */}
              {(post.relatedServiceSlug || post.relatedIndustrySlug) && (
                <div className="pt-8 border-t border-slate-200 bg-slate-50 rounded-2xl p-6 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Related Solutions & Capabilities
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {post.relatedServiceSlug && (
                      <Link
                        href={`/services/${post.relatedServiceSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-blue-600 hover:border-blue-300"
                      >
                        <span>Explore Relevant Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {post.relatedIndustrySlug && (
                      <Link
                        href={`/industries/${post.relatedIndustrySlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-indigo-600 hover:border-indigo-300"
                      >
                        <span>Explore Industry Vertical</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  About Mitraweb Consulting
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We engineer bespoke digital systems, web applications, mobile platforms, and business automation workflows.
                </p>
                <Link
                  href="/contact"
                  className="block text-center w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-2">
                    <Link href={`/blog/${rel.slug}`} className="hover:text-blue-600">
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-3">
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Read Article <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
