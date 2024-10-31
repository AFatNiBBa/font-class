
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train-tram` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tram?s=duotone train-tram}
 * @preview ![train-tram](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/train-tram.svg)
 */
const TrainTram: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64c0 7 3.1 14 9 18.8C19.4 91 34.5 89.3 42.7 79L55.5 63c7.6-9.5 19.1-15 31.2-15L200 48l0 48 48 0 0-48 113.2 0c12.2 0 23.6 5.5 31.2 15l12.8 16c8.3 10.4 23.4 12 33.7 3.7s12-23.4 3.8-33.7L430 33C413.3 12.2 388 0 361.2 0L86.8 0C60 0 34.7 12.2 18 33L5.3 49C1.7 53.4 0 58.7 0 64zM35.1 492.9C28.1 499.9 33.1 512 43 512l39.7 0c8.5 0 16.6-3.4 22.6-9.4L160 448c-1.4 0-2.8 0-4.2-.1s-2.8-.1-4.1-.3c-2.7-.2-5.5-.6-8.1-1c-5.3-.9-10.5-2.3-15.5-4.1c-10-3.5-19.3-8.7-27.4-15.1L35.1 492.9zM128 192c0 10.7 0 21.3 0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32zM288 448c18.2 18.2 36.4 36.4 54.6 54.6c6 6 14.1 9.4 22.6 9.4l39.7 0c10 0 15-12.1 7.9-19.1l-65.5-65.5c-16.3 12.9-37 20.6-59.4 20.6z" />
        <path d="M160 96c-53 0-96 43-96 96l0 160c0 53 43 96 96 96l128 0c53 0 96-43 96-96l0-160c0-53-43-96-96-96L160 96zm0 64l128 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zM128 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TrainTram;