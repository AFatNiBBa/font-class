
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hryvnia-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hryvnia-sign?s=sharp-duotone-solid hryvnia-sign}
 * @preview ![hryvnia-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hryvnia-sign.svg)
 */
const HryvniaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 176l0 64 155.5 0 91.8-52.5c.7-.4 1.3-.8 2-1.2s1.3-.8 1.9-1.3c1.2-.9 2.4-1.8 3.6-2.8c2.3-1.9 4.4-4.1 6.2-6.4L0 176zm0 96l0 64 52.3 0c7.5-26.1 24.2-49 47.5-64L0 272zm123.1 64L384 336l0-64-155.5 0-91.8 52.5c-.7 .4-1.3 .8-2 1.2s-1.3 .8-1.9 1.3c-1.2 .9-2.4 1.8-3.6 2.8c-2.3 1.9-4.4 4.1-6.2 6.4zm161.1-96l99.8 0 0-64-52.3 0c-7.5 26.1-24.2 49-47.5 64z" />
        <path d="M179.5 96c-24.5 0-48 9.7-65.4 27.1l-11.5 11.5L57.4 89.4 68.9 77.8C98.3 48.5 138.1 32 179.5 32L223 32c62.4 0 113 50.6 113 113c0 40.5-21.7 78-56.9 98.1L136.7 324.5c-15.3 8.7-24.7 25-24.7 42.5c0 27.1 21.9 49 49 49l43.5 0c24.5 0 48-9.7 65.4-27.1l11.5-11.5 45.3 45.3-11.5 11.5C285.7 463.5 245.9 480 204.5 480L161 480C98.6 480 48 429.4 48 367c0-40.6 21.7-78 56.9-98.1l142.4-81.4c15.3-8.7 24.7-25 24.7-42.5c0-27.1-21.9-49-49-49l-43.5 0z" />
    </Icon>
);

export default HryvniaSign;