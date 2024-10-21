
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=regular square-down}
 * @preview ![square-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-down.svg)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 416l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16zm48 0c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM328.8 294.6l-91 84c-3.8 3.5-8.7 5.4-13.9 5.4s-10.1-1.9-13.9-5.4l-91-84c-4.6-4.2-7.2-10.1-7.2-16.4c0-12.3 10-22.3 22.3-22.3l41.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 41.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.2 16.4z" />
    </Icon>
);

export default SquareDown;