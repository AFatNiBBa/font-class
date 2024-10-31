
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=thin sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-293.5c0-12.7-5.1-24.9-14.1-33.9L263.4 30.1c-9-9-21.2-14.1-33.9-14.1L64 16C37.5 16 16 37.5 16 64zM0 448L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64zM80 288l0 64 72 0 80 0 72 0 0-64-72 0-80 0-72 0zM272 432c17.7 0 32-14.3 32-32l0-32-64 0 0 64 32 0zM112 208c-17.7 0-32 14.3-32 32l0 32 64 0 0-64-32 0zm112 64l0-64-64 0 0 64 64 0zm0 160l0-64-64 0 0 64 64 0zM80 400c0 17.7 14.3 32 32 32l32 0 0-64-64 0 0 32zM240 272l64 0 0-32c0-17.7-14.3-32-32-32l-32 0 0 64zM64 400l0-160c0-26.5 21.5-48 48-48l32 0 8 0 8 0 64 0 8 0 8 0 32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0-8 0-8 0-64 0-8 0-8 0-32 0c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default SimCard;