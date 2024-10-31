
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-reverse` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-reverse?s=sharp-light rotate-reverse}
 * @preview ![rotate-reverse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rotate-reverse.svg)
 */
const RotateReverse: typeof Icon = x => (
    <Icon {...x}>
        <path d="M82.9 288C98 369.9 169.7 432 256 432c52.7 0 99.9-23.1 132.2-59.8l-37.6-37.6L328 312l22.6-22.6L352 288l96 0 32 0 0 32 0 96-1.4 1.4L456 440l-22.6-22.6-22.5-22.5C372.8 437.3 317.5 464 256 464C152 464 65.8 387.7 50.4 288l32.5 0zm18.2-170.9C139.2 74.7 194.5 48 256 48c104 0 190.2 76.3 205.6 176l-32.5 0C414.1 142.1 342.3 80 256 80c-52.7 0-99.9 23.1-132.2 59.8l37.6 37.6L184 200l-22.6 22.6L160 224l-96 0-32 0 0-32 0-96 1.4-1.4L56 72 78.6 94.6l22.5 22.5zM381.3 320L448 386.7l0-66.7-66.7 0zM64 192l66.7 0L64 125.3 64 192z" />
    </Icon>
);

export default RotateReverse;