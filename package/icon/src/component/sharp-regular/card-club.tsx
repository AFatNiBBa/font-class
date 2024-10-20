
import { Icon } from "../../index";

/**
 * A component that renders the `card-club` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-club?s=sharp-regular card-club}
 * @preview ![card-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/card-club.svg)
 */
const CardClub: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l0 416 288 0 0-416L48 48zM0 0L48 0 336 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM256 192c0 5.6-.7 11.1-2.1 16.3c28.2 2.9 50.1 26.8 50.1 55.7c0 30.9-25.1 56-56 56c-15.7 0-29.8-6.4-40-16.8l0 32.8 16 0 16 0 0 32-16 0-16 0-32 0-16 0-16 0 0-32 16 0 16 0 0-32.8c-10.2 10.4-24.3 16.8-40 16.8c-30.9 0-56-25.1-56-56c0-28.9 21.9-52.7 50.1-55.7c-1.4-5.2-2.1-10.7-2.1-16.3c0-35.3 28.7-64 64-64s64 28.7 64 64z" />
    </Icon>
);

export default CardClub;