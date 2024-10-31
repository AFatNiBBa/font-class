
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=thin bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 56c0-30.9-25.1-56-56-56L184 0c-18.1 0-34.1 8.6-44.4 21.9l12.6 9.9C159.5 22.2 171 16 184 16l272 0c22.1 0 40 17.9 40 40l0 247.2 16 12.6L512 56zM144 485.8l0-277-16-12.6 0 289.6c0 14.5 11.8 26.2 26.2 26.2c5.4 0 10.6-1.7 15.1-4.7L320 401.8 470.7 507.3c4.4 3.1 9.7 4.7 15 4.7c10.4 0 19.4-6 23.6-14.8L496 486.6c-.5 5.2-4.9 9.4-10.2 9.4c-2.1 0-4.2-.6-5.9-1.9L324.6 385.4c-2.8-1.9-6.4-1.9-9.2 0L160.1 494.1c-1.7 1.2-3.8 1.9-5.9 1.9c-5.7 0-10.2-4.6-10.2-10.2zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default BookmarkSlash;