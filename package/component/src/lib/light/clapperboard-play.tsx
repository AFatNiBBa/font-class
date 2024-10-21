
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard-play` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard-play?s=light clapperboard-play}
 * @preview ![clapperboard-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clapperboard-play.svg)
 */
const ClapperboardPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 192l0 224c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-224 448 0zm0-32l-97.4 0 87.3-87.3C476.1 78.5 480 86.8 480 96l0 64zm-249.4 0l96-96 106.7 0-96 96-106.7 0zm-45.3 0L78.6 160l96-96 106.7 0-96 96zM64 64l65.4 0-96 96L32 160l0-64c0-17.7 14.3-32 32-32zm448 96l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64 0 16 0 16L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224 0-16 0-16zM216.1 226.2c-4.9-2.9-11.1-2.9-16.1-.1s-8.1 8.1-8.1 13.9l0 160c0 5.7 3.1 11 8.1 13.9s11.1 2.8 16.1-.1l136-80c4.9-2.9 7.9-8.1 7.9-13.8s-3-10.9-7.9-13.8l-136-80zM312.4 320L224 372 224 268l88.4 52z" />
    </Icon>
);

export default ClapperboardPlay;