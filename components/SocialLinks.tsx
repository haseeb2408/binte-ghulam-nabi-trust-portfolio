import { site } from "@/lib/content";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "./Icons";

export const socialList = [
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: site.socials.youtube, Icon: YouTubeIcon },
  { label: "TikTok", href: site.socials.tiktok, Icon: TikTokIcon },
].filter((s) => s.href);

/** Icon-only round links. Pass itemClassName to style each circle. */
export default function SocialLinks({ itemClassName = "" }: { itemClassName?: string }) {
  return (
    <>
      {socialList.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={itemClassName}>
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </>
  );
}
