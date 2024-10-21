
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=regular ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 448L48 67.9l66.7 66.7-14.1 14.1c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l14.1-14.1 57.4 57.4-14.1 14.1c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l14.1-14.1 57.4 57.4-14.1 14.1c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l14.1-14.1 57.4 57.4-14.1 14.1c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l14.1-14.1L444.1 464 64 464c-8.8 0-16-7.2-16-16zm454.6 6.6L57.4 9.4C51.4 3.4 43.2 0 34.7 0L32 0C14.3 0 0 14.3 0 32L0 448c0 35.3 28.7 64 64 64l416 0c17.7 0 32-14.3 32-32l0-2.7c0-8.5-3.4-16.6-9.4-22.6zM128 256l0 128 128 0L128 256z" />
    </Icon>
);

export default RulerTriangle;