
import { Icon } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=regular computer-classic}
 * @preview ![computer-classic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/computer-classic.svg)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c8.8 0 16 7.2 16 16l0 304c0 8.8-7.2 16-16 16L64 384c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l320 0zM64 0C28.7 0 0 28.7 0 64L0 368c0 23.7 12.9 44.4 32 55.4L32 480c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-56.6c19.1-11.1 32-31.7 32-55.4l0-304c0-35.3-28.7-64-64-64L64 0zM80 432l288 0 0 32L80 464l0-32zm0-320l0 96c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L112 80c-17.7 0-32 14.3-32 32zM208 320c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0c-8.8 0-16 7.2-16 16zm-88 32a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default ComputerClassic;