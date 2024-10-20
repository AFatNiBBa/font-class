
import { Icon } from "../../index";

/**
 * A component that renders the `ban-smoking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-smoking?s=regular ban-smoking}
 * @preview ![ban-smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ban-smoking.svg)
 */
const BanSmoking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M92.9 126.9L385.1 419.1C349.7 447.2 304.8 464 256 464C141.1 464 48 370.9 48 256c0-48.8 16.8-93.7 44.9-129.1zm165 97.1L126.9 92.9C162.3 64.8 207.2 48 256 48c114.9 0 208 93.1 208 208c0 48.8-16.8 93.7-44.9 129.1L353.9 320l46.1 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-142.1 0zm32 32l94.1 0 0 32-62.1 0-32-32zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM272 96c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16s7.2 16 16 16s16-7.2 16-16c0-26.5-21.5-48-48-48l-32 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16zM112 224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l128.8 0-96-96L112 224z" />
    </Icon>
);

export default BanSmoking;