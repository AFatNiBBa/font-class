
import { Icon, generic } from "../../index";

/**
 * A component that renders the `page` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page?s=duotone page}
 * @preview ![page](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/page.svg)
 */
const Page: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 512H320c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Page;