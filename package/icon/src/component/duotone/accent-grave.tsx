
import { Icon, generic } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=duotone accent-grave}
 * @preview ![accent-grave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/accent-grave.svg)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M108.3 204.8L41.2 95c-6-9.8-9.2-21.2-9.2-32.7C32 28.1 59.7 0 93.9 0c29.2 0 54.4 20.4 60.6 49l27.1 126.6C187 200.5 168 224 142.5 224c-14 0-26.9-7.3-34.2-19.2z" />
    </Icon>
);

export default AccentGrave;