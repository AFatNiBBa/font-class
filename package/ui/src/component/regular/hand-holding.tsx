
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding?s=regular hand-holding}
 * @preview ![hand-holding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hand-holding.svg)
 */
const HandHolding: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M165.2 358.7c6.6-4.4 14.3-6.7 22.2-6.7L344 352c8.8 0 16 7.2 16 16s-7.2 16-16 16l-24 0-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 24 0 48 0c4.4 0 8.8-1.2 12.6-3.6l93.5-57.5c3.1-1.9 6.7-2.9 10.3-2.9l7.4 0c6.8 0 12.3 5.5 12.3 12.3c0 4.2-2.1 8-5.6 10.3l-95.6 61.9C415.1 460 401.5 464 387.7 464L24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l363.7 0c23.1 0 45.8-6.7 65.2-19.3l95.6-61.9c17.2-11.1 27.5-30.2 27.5-50.6c0-33.3-27-60.3-60.3-60.3l-7.4 0c-12.5 0-24.8 3.5-35.5 10L408 370c0-.7 0-1.3 0-2c0-35.3-28.7-64-64-64l-156.6 0c-17.4 0-34.4 5.1-48.8 14.8L64.7 368 24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c4.7 0 9.4-1.4 13.3-4l79.9-53.3z" />
    </Icon>
);

export default HandHolding;