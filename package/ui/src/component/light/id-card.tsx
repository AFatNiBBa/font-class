
import { Icon } from "../../index";

/**
 * A component that renders the `id-card` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=light id-card}
 * @preview ![id-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/id-card.svg)
 */
const IdCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l512 0c0-17.7-14.3-32-32-32L64 64zM0 112L0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 16 0 304c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 112zm544 16L32 128l0 288c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-288zM192 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM160 352c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48l-64 0zM336 208c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default IdCard;