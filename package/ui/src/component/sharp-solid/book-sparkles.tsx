
import { Icon } from "../../index";

/**
 * A component that renders the `book-sparkles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-sparkles?s=sharp-solid book-sparkles}
 * @preview ![book-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-sparkles.svg)
 */
const BookSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0 0-64 32 0L448 0 416 0 384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zM264 200l24-56 24 56 56 24-56 24-24 56-24-56-56-24 56-24zM176 64l16 32 32 16-32 16-16 32-16-32-32-16 32-16 16-32z" />
    </Icon>
);

export default BookSparkles;