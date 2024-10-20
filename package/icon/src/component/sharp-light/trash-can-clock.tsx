
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-clock?s=sharp-light trash-can-clock}
 * @preview ![trash-can-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash-can-clock.svg)
 */
const TrashCanClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 0l-8.9 0-4.7 7.5L111.1 64 64 64 32 64 0 64 0 96l32 0 0 384 0 32 32 0 266.8 0c-12.9-9.1-24.5-19.9-34.6-32L64 480 64 96l320 0 0 102.6c10.3-2.9 21-4.9 32-5.9L416 96l32 0 0-32-32 0-32 0-47.1 0L301.6 7.5 296.9 0 288 0 160 0zM304 247.2c9.6-10.1 20.3-19.1 32-26.7l0-44.5 0-16-32 0 0 16 0 71.2zM299.1 64L148.9 64l20-32 110.3 0 20 32zM144 176l0-16-32 0 0 16 0 224 0 16 32 0 0-16 0-224zm96 0l0-16-32 0 0 16 0 224 0 16 32 0 0-16 0-224zm192 80a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-224l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default TrashCanClock;