
import { Icon } from "../../index";

/**
 * A component that renders the `pen-swirl` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-swirl?s=thin pen-swirl}
 * @preview ![pen-swirl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pen-swirl.svg)
 */
const PenSwirl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M468.5 31.8l11.9 11.9c15.6 15.6 15.6 40.9 0 56.6L440 140.7 371.7 72.4l40-40.5c15.6-15.8 41-15.8 56.7-.2zm-264 209.8l156-157.8L428.7 152 271.9 308.9c-5.5 5.5-12.5 9.3-20.1 10.9l-73.5 15.4 15.5-73.7c1.6-7.5 5.3-14.4 10.7-19.9zM400.4 20.7L193.1 230.3c-7.6 7.7-12.8 17.3-15 27.9l-18 85.6c-.6 2.6 .3 5.4 2.2 7.3s4.7 2.7 7.3 2.2l85.5-17.9c10.6-2.2 20.4-7.5 28.1-15.2L491.7 111.6c21.9-21.9 21.9-57.3 0-79.2L479.8 20.5c-22-22-57.6-21.9-79.4 .2zM325.1 51.3l12.4-12.6C312.2 29.2 284.7 24 256 24C127.9 24 24 127.9 24 256s103.9 232 232 232c4.4 0 8-3.6 8-8s-3.6-8-8-8C136.7 472 40 375.3 40 256S136.7 40 256 40c24.2 0 47.4 4 69.1 11.3zM461 187.6c7.2 21.5 11 44.5 11 68.4c0 66.3-53.7 120-120 120c-15.9 0-31.1-3.1-45-8.7c-4.1-1.7-8.8 .3-10.4 4.4s.3 8.8 4.4 10.4c15.8 6.4 33 9.9 51 9.9c75.1 0 136-60.9 136-136c0-28.5-5.1-55.7-14.5-80.9L461 187.6z" />
    </Icon>
);

export default PenSwirl;