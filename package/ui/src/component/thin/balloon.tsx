
import { Icon } from "../../index";

/**
 * A component that renders the `balloon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloon?s=thin balloon}
 * @preview ![balloon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/balloon.svg)
 */
const Balloon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.4 427.2s0 0 0 0L208 432l-32 0-6.4-4.8s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0-.1 0l-.3-.2L168 426c-1.1-.9-2.7-2.1-4.8-3.8c-4.2-3.4-10.3-8.4-17.6-14.9c-14.6-12.9-34.1-31.4-53.5-53.8C52.6 308.1 16 249.9 16 192C16 94.8 94.8 16 192 16s176 78.8 176 176c0 57.9-36.6 116.1-76.1 161.5c-19.4 22.3-38.9 40.8-53.5 53.8c-7.3 6.5-13.4 11.5-17.6 14.9c-2.1 1.7-3.7 3-4.8 3.8l-1.2 .9-.3 .2c0 0 0 0-.1 0c0 0 0 0 0 0s0 0 0 0zM210.1 448l27.4 48-91.1 0 27.4-48 36.3 0zm13.9-8s160-120 160-248C384 86 298 0 192 0S0 86 0 192C0 320 160 440 160 440l-30.3 53.1c-1.1 1.9-1.7 4.1-1.7 6.3c0 7 5.7 12.6 12.6 12.6l102.7 0c7 0 12.6-5.7 12.6-12.6c0-2.2-.6-4.4-1.7-6.3L224 440zM168 96c4.4 0 8-3.6 8-8s-3.6-8-8-8c-48.6 0-88 39.4-88 88c0 4.4 3.6 8 8 8s8-3.6 8-8c0-39.8 32.2-72 72-72z" />
    </Icon>
);

export default Balloon;