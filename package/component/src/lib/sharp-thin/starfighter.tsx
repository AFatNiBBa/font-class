
import { Icon } from "../../index";

/**
 * A component that renders the `starfighter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=sharp-thin starfighter}
 * @preview ![starfighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/starfighter.svg)
 */
const Starfighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M281.1 0l-1 6.8-40 272-.1 .6 0 .6 0 192 0 8 8 0 144 0 8 0 0-8 0-192 0-.6-.1-.6-40-272-1-6.8L352 0 288 0l-6.9 0zm13.8 16l50.2 0L384 280.6 384 464l-128 0 0-183.4L294.9 16zM608 96l0-8-16 0 0 8 0 32-16 0-8 0 0 16 8 0 16 0 0 176-80 0 0-40 0-8-8 0-64 0-8 0 0 16 8 0 56 0 0 32 0 16 0 128-56 0-8 0 0 8 0 32 0 8 16 0 0-8 0-24 56 0 8 0 0-8 0-18.7L592 420l0 28 0 8 16 0 0-8 0-304 16 0 8 0 0-16-8 0-16 0 0-32zM512 336l80 0 0 66.7L512 436l0-100zM344 256l0 56-48 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24zm-64 0l0 56 0 16 16 0 48 0 16 0 0-16 0-56c0-22.1-17.9-40-40-40s-40 17.9-40 40zM32 96l0 32-16 0-8 0 0 16 8 0 16 0 0 304 0 8 16 0 0-8 0-28 80 33.3 0 18.7 0 8 8 0 56 0 0 24 0 8 16 0 0-8 0-32 0-8-8 0-56 0 0-128 0-16 0-32 56 0 8 0 0-16-8 0-64 0-8 0 0 8 0 40-80 0 0-176 16 0 8 0 0-16-8 0-16 0 0-32 0-8L32 88l0 8zm96 240l0 100L48 402.7 48 336l80 0z" />
    </Icon>
);

export default Starfighter;