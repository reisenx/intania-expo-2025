import Card from "@/app/components/Card";
import Icon from "@/app/components/Icon";
import Interactive from "@/app/components/Interactive";
import cn from "@/lib/helpers/cn";
import { StyleableFC } from "@/lib/types/misc";

/**
 * A Card containing a main navigation route in the main page.
 *
 * @param children A navigation card adornment placed at the bottom.
 * @param title A short title displayed in all caps.
 * @param body A brief 2-line summary of the linked page.
 * @param href The linked page.
 */
const NavigationCard: StyleableFC<{
  children?: React.ReactNode;
  title: string;
  body: string;
  href?: string;
}> = ({ children, title, body, href }) => (
  <Card className="iex-navigation-card relative">
    <Interactive
      href={href}
      className={cn(`state-layer-white border-cream flex min-h-48 w-full
        flex-col items-center gap-1 border-1 bg-transparent py-3.5 text-center
        text-balance`)}
    >
      <h3
        className={cn(`text-yellow text-display-md font-narrow text-center
          leading-none font-bold tracking-tight uppercase italic
          [text-shadow:_4px_4px_0px_var(--color-bright-red)]`)}
      >
        {title}
      </h3>
      <p className="max-w-84 font-bold">{body}</p>
    </Interactive>
    {children ? (
      <div
        className={cn(`pointer-events-none absolute inset-x-0 -bottom-1 z-10
          grid place-items-center *:pointer-events-auto`)}
      >
        {children}
      </div>
    ) : (
      <Icon
        name="arrow_forward"
        className="text-cream absolute right-4 bottom-4"
      />
    )}
  </Card>
);

export default NavigationCard;
