
import { Icon } from "../../index";

/**
 * A component that renders the `square-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=light square-left}
 * @preview ![square-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-left.svg)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 416c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320zm32 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zM80 256c0-9.2 3.5-18 9.7-24.7l84-91c7.2-7.8 17.4-12.3 28.1-12.3c21.1 0 38.3 17.1 38.3 38.3l0 25.7 80 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-80 0 0 25.7c0 21.1-17.1 38.3-38.3 38.3c-10.7 0-20.9-4.5-28.1-12.3l-84-91C83.5 274 80 265.2 80 256zm33.2 3l84 91c1.2 1.3 2.9 2 4.6 2c3.5 0 6.3-2.8 6.3-6.3l0-41.7c0-8.8 7.2-16 16-16l96 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-96 0c-8.8 0-16-7.2-16-16l0-41.7c0-3.5-2.8-6.3-6.3-6.3c-1.7 0-3.4 .7-4.6 2l-84 91c-.8 .8-1.2 1.9-1.2 3s.4 2.2 1.2 3z" />
    </Icon>
);

export default SquareLeft;