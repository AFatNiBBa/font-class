
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=regular plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMjU2QzQzMiAyNjkuMjUgNDIxLjI1IDI4MCA0MDggMjgwSDI0OFY0NDBDMjQ4IDQ1My4yNSAyMzcuMjUgNDY0IDIyNCA0NjRTMjAwIDQ1My4yNSAyMDAgNDQwVjI4MEg0MEMyNi43NSAyODAgMTYgMjY5LjI1IDE2IDI1NlMyNi43NSAyMzIgNDAgMjMySDIwMFY3MkMyMDAgNTguNzUgMjEwLjc1IDQ4IDIyNCA0OFMyNDggNTguNzUgMjQ4IDcyVjIzMkg0MDhDNDIxLjI1IDIzMiA0MzIgMjQyLjc1IDQzMiAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 256C432 269.25 421.25 280 408 280H248V440C248 453.25 237.25 464 224 464S200 453.25 200 440V280H40C26.75 280 16 269.25 16 256S26.75 232 40 232H200V72C200 58.75 210.75 48 224 48S248 58.75 248 72V232H408C421.25 232 432 242.75 432 256Z" />
    </Icon>
);

export default Plus;