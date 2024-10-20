
import { Icon } from "../../index";

/**
 * A component that renders the `eraser` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=regular eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M97 319c-9.4 9.4-9.4 24.6 0 33.9l72 72c4.5 4.5 10.6 7 17 7l108.1 0c6.4 0 12.5-2.5 17-7l65-65L216 200 97 319zM285.1 63c28.1-28.1 73.7-28.1 101.8 0L513 189.1c28.1 28.1 28.1 73.7 0 101.8L371.9 432 520 432c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0s0 0 0 0c-.6 0-1.3 0-1.9 0l-108.1 0c-19.1 0-37.4-7.6-50.9-21.1l-72-72c-28.1-28.1-28.1-73.7 0-101.8L285.1 63z" />
    </Icon>
);

export default Eraser;