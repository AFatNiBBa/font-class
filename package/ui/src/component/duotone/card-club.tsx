
import { Icon, generic } from "../../index";

/**
 * A component that renders the `card-club` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-club?s=duotone card-club}
 * @preview ![card-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/card-club.svg)
 */
const CardClub: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 264c0 30.9 25.1 56 56 56c15.7 0 29.8-6.4 40-16.8l0 32.8-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-32.8c10.2 10.4 24.3 16.8 40 16.8c30.9 0 56-25.1 56-56c0-28.9-21.9-52.7-50.1-55.7c1.4-5.2 2.1-10.7 2.1-16.3c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.6 .7 11.1 2.1 16.3C101.9 211.3 80 235.1 80 264z" />
        <path d="M253.9 208.3c1.4-5.2 2.1-10.7 2.1-16.3c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.6 .7 11.1 2.1 16.3C101.9 211.3 80 235.1 80 264c0 30.9 25.1 56 56 56c15.7 0 29.8-6.4 40-16.8l0 32.8-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-32.8c10.2 10.4 24.3 16.8 40 16.8c30.9 0 56-25.1 56-56c0-28.9-21.9-52.7-50.1-55.7z" />
    </Icon>
);

export default CardClub;