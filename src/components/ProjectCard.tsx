import { Link } from 'react-router-dom';
import type { ProjectData } from '../types/project';
import { launchTypeToLabel, statusToLabel } from '../data/projects';
import { motion } from 'framer-motion';

const baseStyle =
  'aubl-project-card block rounded-[28px] border border-white/12 bg-[#0a1f43]/55 p-5 md:p-6 transition will-change-transform';

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className={`${baseStyle} group hover:-translate-y-1 hover:border-aqua/70 hover:bg-[#16335f]/55`}
      >
        <div className="mb-4 flex items-start justify-between gap-2">
          <h3 className="text-lg font-black leading-tight md:text-xl">{project.title}</h3>
          <span className="aubl-badge">
            {statusToLabel[project.status]}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-slate-200">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-100/90">
          <span className="rounded-full border border-white/20 bg-black/30 px-2 py-1">{project.timeline.period}</span>
          {project.launchType.map((type) => (
            <span key={type} className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1">
              {launchTypeToLabel[type]}
            </span>
          ))}
        </div>
        <div className="mt-5 border-t border-white/12 pt-3">
          <span className="text-xs uppercase tracking-[0.16em] text-white/55">Case Detail</span>
          <div className="mt-2 inline-flex items-center gap-2 text-xs text-aqua">
            상세 페이지 보기
            <span aria-hidden>→</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
