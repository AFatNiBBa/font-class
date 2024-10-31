
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=regular octagon}
 * @preview ![octagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/octagon.svg)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M170.5 57.4c6-6 14.1-9.4 22.6-9.4l125.7 0c8.5 0 16.6 3.4 22.6 9.4L454.6 170.5c6 6 9.4 14.1 9.4 22.6l0 125.7c0 8.5-3.4 16.6-9.4 22.6L341.5 454.6c-6 6-14.1 9.4-22.6 9.4l-125.7 0c-8.5 0-16.6-3.4-22.6-9.4L57.4 341.5c-6-6-9.4-14.1-9.4-22.6l0-125.7c0-8.5 3.4-16.6 9.4-22.6L170.5 57.4zM136.6 23.4L23.4 136.6C8.4 151.6 0 171.9 0 193.1L0 318.9c0 21.2 8.4 41.6 23.4 56.6L136.6 488.6c15 15 35.4 23.4 56.6 23.4l125.7 0c21.2 0 41.6-8.4 56.6-23.4L488.6 375.4c15-15 23.4-35.4 23.4-56.6l0-125.7c0-21.2-8.4-41.6-23.4-56.6L375.4 23.4C360.4 8.4 340.1 0 318.9 0L193.1 0c-21.2 0-41.6 8.4-56.6 23.4z" />
    </Icon>
);

export default Octagon;