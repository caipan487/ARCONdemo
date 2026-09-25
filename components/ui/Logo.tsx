/**
 * Вордмарк компании. База имени приходит из контента (локаль-зависимо),
 * строчное «demo» — вполовину меньше заглавных и опущено под них: подчёркивает
 * демонстрационный характер витрины.
 */
export function Logo({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`font-display font-extrabold leading-none tracking-tight text-text ${className}`}>
      {name}
      <span className="relative top-[0.22em] ml-[0.04em] align-baseline text-[0.5em] font-semibold lowercase tracking-normal text-accent">
        demo
      </span>
    </span>
  );
}
