
import { Icon } from "../../index";

/**
 * A component that renders the `robot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=sharp-thin robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 0l0 8 0 88 200 0 16 0 0 16 0 384 0 16-16 0-416 0-16 0 0-16 0-384 0-16 16 0 200 0 0-88 0-8 16 0zM112 112l0 384 416 0 0-384-200 0-16 0-200 0zm88 288l48 0 8 0 0 16-8 0-48 0-8 0 0-16 8 0zm96 0l48 0 8 0 0 16-8 0-48 0-8 0 0-16 8 0zm96 0l48 0 8 0 0 16-8 0-48 0-8 0 0-16 8 0zM224 216a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm56 40a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zm96 0a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm40 56a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM16 224l48 0 0 16-48 0 0 160 48 0 0 16-48 0L0 416l0-16L0 240l0-16 16 0zM624 400l0-160-48 0 0-16 48 0 16 0 0 16 0 160 0 16-16 0-48 0 0-16 48 0z" />
    </Icon>
);

export default Robot;