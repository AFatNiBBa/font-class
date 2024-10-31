
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=light dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 32c17.7 0 32 14.3 32 32l0 384c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l320 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zm64 96A24 24 0 1 0 80 96a24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm40 296c-56.4 0-103.1-41.7-110.9-96l62.9 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-62.9 0c7.8-54.3 54.4-96 110.9-96c61.9 0 112 50.1 112 112s-50.1 112-112 112zM80 304a144 144 0 1 0 288 0A144 144 0 1 0 80 304z" />
    </Icon>
);

export default Dryer;