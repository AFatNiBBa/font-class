
import { Icon } from "../../index";

/**
 * A component that renders the `hand-heart` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-heart?s=sharp-regular hand-heart}
 * @preview ![hand-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hand-heart.svg)
 */
const HandHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0l24 0 80 0 24 0 0 24 0 8 56 0 24 0 0 24 0 40 56 0 24 0 0 24 0 184 0 24s0 0 0 0c0 101.6-82.4 184-184 184l-8.5 0c-67.9 0-133-27-181-75L13.9 344.5 7 337.5l-7-7 0-9.9 0-42.7 0-9.9 7-7 35.2-35.2 17-17 17 17 28.3 28.3 7.5 7.5L112 56l0-24 24 0 56 0s0 0 0 0l0-8 0-24zM160 80l0 224 0 9.9-7 7-7.7 7.7-17 17-17-17L70.5 287.9 59.2 276.6 48 287.8l0 22.9 92.5 92.5c39 39 91.9 60.9 147.1 60.9l8.5 0c75.1 0 136-60.9 136-136l0-24 0-24s0 0 0 0l0-136-32 0 0 88 0 24-48 0 0-24 0-120 0-24s0 0 0 0l0-8-32 0 0 152 0 24-48 0 0-24 0-176 0-8-32 0 0 8 0 24s0 0 0 0l0 152 0 24-48 0 0-24 0-152-32 0zm48 247.5c0-21.8 17.7-39.5 39.5-39.5l1.6 0c10.6 0 20.8 4.1 28.5 11.5l5.1 4.9 5.1-4.9c7.7-7.4 17.9-11.5 28.5-11.5l1.6 0c21.8 0 39.5 17.7 39.5 39.5c0 10.7-4.4 21-12.1 28.4L290.1 409l-7.4 7.1-7.4-7.1-55.2-53.1c-7.7-7.4-12.1-17.7-12.1-28.4z" />
    </Icon>
);

export default HandHeart;