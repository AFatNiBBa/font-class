
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=sharp-regular ruler-triangle}
 * @preview ![ruler-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ruler-triangle.svg)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 464L48 67.9l66.7 66.7-14.1 14.1L89.4 160 112 182.6l11.3-11.3 14.1-14.1 57.4 57.4-14.1 14.1L169.4 240 192 262.6l11.3-11.3 14.1-14.1 57.4 57.4-14.1 14.1L249.4 320 272 342.6l11.3-11.3 14.1-14.1 57.4 57.4-14.1 14.1L329.4 400 352 422.6l11.3-11.3 14.1-14.1L444.1 464 48 464zM0 0L0 48 0 464l0 48 48 0 416 0 48 0 0-48L48 0 0 0zM128 256l0 128 128 0L128 256z" />
    </Icon>
);

export default RulerTriangle;