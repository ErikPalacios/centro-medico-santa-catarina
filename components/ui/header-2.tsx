import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import GradientButton from '@/components/ui/button-1';
import { config } from '@/src/config';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const { nav, brand } = config;

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-xl md:border md:transition-all md:ease-out',
        {
          'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:shadow':
            scrolled && !open,
          'bg-background/90': open,
        },
      )}
    >
      <nav className="flex h-14 w-full items-center gap-4 px-5 md:h-12 md:px-6 md:transition-all md:ease-out">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.jpg" alt="Logo Centro Médico SC" className="h-9 w-9 rounded-lg object-cover" />
          <span className="block text-[11px] leading-[1.15] max-w-[170px] lg:text-sm lg:leading-normal lg:max-w-none lg:whitespace-nowrap font-bold tracking-tight text-primary">
            {brand.name}
          </span>
        </a>

        <div className="hidden items-center gap-2 ml-auto md:flex">
          {nav.links.map((link, i) => (
            <a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className={buttonVariants({ variant: 'outline' })} href={`tel:${brand.phone}`}>
            Inicia llamada
          </a>
          <button
            onClick={() => { window.location.href = '#contact'; }}
            className="inline-flex items-center justify-center whitespace-nowrap shrink-0 rounded-xl bg-primary text-white font-bold text-sm px-5 h-[38px] hover:opacity-90 transition-opacity duration-200"
          >
            {nav.ctaLabel}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'ml-auto md:hidden')}
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'bg-background/95 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y backdrop-blur-lg md:hidden transition-all duration-300 ease-out',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div
          className={cn(
            'flex h-full w-full flex-col justify-between gap-y-2 p-4 transition-all duration-300 ease-out',
            open ? 'scale-100' : 'scale-95',
          )}
        >
          <div className="grid gap-y-2">
            {nav.links.map((link) => (
              <a
                key={link.label}
                className={buttonVariants({ variant: 'ghost', className: 'justify-start' })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <a
              className={buttonVariants({ variant: 'outline', className: 'w-full' })}
              href={`tel:${brand.phone}`}
            >
              Inicia llamada
            </a>
            <GradientButton
              dark
              height="48px"
              className="w-full"
              onClick={() => { setOpen(false); window.location.href = '#contact'; }}
            >
              <span className="text-sm">{nav.ctaLabel}</span>
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
}
