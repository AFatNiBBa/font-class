
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=duotone pen-to-square}
 * @preview ![pen-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-to-square.svg)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160c0-53 43-96 96-96l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 160z" />
        <path d="M392.4 21.7L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0zM339.7 74.3L172.4 241.7c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3z" />
    </Icon>
);

export default PenToSquare;