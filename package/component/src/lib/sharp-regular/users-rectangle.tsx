
import { Icon } from "../../index";

/**
 * A component that renders the `users-rectangle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-rectangle?s=sharp-regular users-rectangle}
 * @preview ![users-rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/users-rectangle.svg)
 */
const UsersRectangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L24 0 616 0l24 0 0 24 0 464 0 24-24 0L24 512 0 512l0-24L0 24 0 0zM48 48l0 416 544 0 0-416L48 48zm79.8 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM120 240l79 0L193 264.2 179 320l-83 0 24-80zm424 80l-83 0L447 264.2 441 240l79 0 24 80zM416 160a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM253.5 352l133 0-8-32-117 0-8 32zM224 272l192 0 20 80 12 48-49.5 0-157 0L192 400l12-48 20-80zM344 168a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-96 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0z" />
    </Icon>
);

export default UsersRectangle;