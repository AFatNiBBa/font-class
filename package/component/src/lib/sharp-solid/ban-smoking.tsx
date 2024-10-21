
import { Icon } from "../../index";

/**
 * A component that renders the `ban-smoking` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-smoking?s=sharp-solid ban-smoking}
 * @preview ![ban-smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ban-smoking.svg)
 */
const BanSmoking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M99.5 144.8L178.7 224l96 96 92.5 92.5C335.9 434.9 297.5 448 256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2zM333.3 288l-32-32 82.7 0 0 32-50.7 0zm32 32l34.7 0 16 0 0-16 0-64 0-16-16 0-130.7 0L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2L365.3 320zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM288 96l-32 0 0 16c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16l0 16 32 0 0-16c0-26.5-21.5-48-48-48l-32 0c-8.8 0-16-7.2-16-16l0-16zM229.5 320l-96-96L112 224l-16 0 0 16 0 64 0 16 16 0 117.5 0z" />
    </Icon>
);

export default BanSmoking;