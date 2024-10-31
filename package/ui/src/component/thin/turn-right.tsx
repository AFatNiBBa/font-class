
import { Icon } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=thin turn-right}
 * @preview ![turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/turn-right.svg)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 272l0 89.1c0 3.8 3.1 6.9 6.9 6.9c1.8 0 3.5-.7 4.7-1.9L495.2 225.9c.5-.5 .8-1.2 .8-1.9s-.3-1.4-.8-1.9L347.6 81.9c-1.3-1.2-3-1.9-4.7-1.9c-3.8 0-6.9 3.1-6.9 6.9l0 89.1c0 8.8-7.2 16-16 16l-208 0c-53 0-96 43-96 96l0 152c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-152c0-17.7 14.3-32 32-32l208 0c8.8 0 16 7.2 16 16zm170.2-34.5L358.6 377.7c-4.2 4-9.9 6.3-15.8 6.3c-12.6 0-22.9-10.2-22.9-22.9l0-73.1 0-16-16 0-192 0c-8.8 0-16 7.2-16 16l0 152c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40L0 288c0-61.9 50.1-112 112-112l192 0 16 0 0-16 0-73.1C320 74.2 330.2 64 342.9 64c5.9 0 11.5 2.3 15.8 6.3L506.2 210.5c3.7 3.5 5.8 8.4 5.8 13.5s-2.1 10-5.8 13.5z" />
    </Icon>
);

export default TurnRight;