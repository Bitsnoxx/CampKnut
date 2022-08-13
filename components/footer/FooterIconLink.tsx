import { socials } from 'content/links';

import clsx from 'clsx';

type FooterIconLinkProps = {
  children: JSX.Element | JSX.Element[];
  platform: 'Twitch' | 'Reddit' | 'Youtube' | 'Twitter' | 'Instagram' | 'Merch';
  className?: string;
};

export default function FooterIconLink({ children, platform, className }: FooterIconLinkProps) {
  return (
    <a
      className={clsx(className)}
      target={'_blank'}
      rel="noreferrer"
      aria-label={clsx(platform)}
      href={socials.find((e) => e.name === platform)?.url ?? '#'}
    >
      {children}
    </a>
  );
}
