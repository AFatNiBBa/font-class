
import { Icon } from "../../index";

/**
 * A component that renders the `bowl-scoop` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-scoop?s=solid bowl-scoop}
 * @preview ![bowl-scoop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bowl-scoop.svg)
 */
const BowlScoop: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 224l384 0c0-106-86-192-192-192S32 118 32 224zM16 256c-4.6 0-9 2-12 5.4s-4.5 8-3.9 12.6l2 15.9C11.1 361.9 72.4 416 145 416l40.4 0-68.7 68.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9l192 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4L262.6 416l40.4 0c72.6 0 133.9-54.1 142.9-126.1l2-15.9c.6-4.6-.8-9.1-3.9-12.6s-7.4-5.4-12-5.4L16 256z" />
    </Icon>
);

export default BowlScoop;