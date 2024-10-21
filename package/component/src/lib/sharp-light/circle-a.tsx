
import { Icon } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=sharp-light circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM245.8 112l-4.3 9.2L126 368l35.3 0 30-64 129.5 0 30 64 35.3 0L270.5 121.2l-4.3-9.2-20.4 0zM256 165.7L305.8 272l-99.5 0L256 165.7z" />
    </Icon>
);

export default CircleA;