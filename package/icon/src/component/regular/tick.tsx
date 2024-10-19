
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=regular tick}
 * @preview ![tick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNzIgMTA0YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjRsMCAxLjljMCAxLjQtLjEgMi44LS40IDQuM2MwIDAgMCAwIDAgMEw5NiAyNTIgNzIuNCAxMTAuMWMtLjItMS40LS40LTIuOC0uNC00LjNsMC0xLjl6bTk1IDE0Yy43LTQgMS04LjEgMS0xMi4xbDAtMS45YzAtMzkuOC0zMi4yLTcyLTcyLTcycy03MiAzMi4yLTcyIDcybDAgMS45YzAgNC4xIC4zIDguMSAxIDEyLjFMNDkuNCAyNjQuNUM1My4yIDI4Ny4zIDcyLjkgMzA0IDk2IDMwNHM0Mi44LTE2LjcgNDYuNi0zOS41TDE2NyAxMTh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 104c0-13.3 10.7-24 24-24s24 10.7 24 24l0 1.9c0 1.4-.1 2.8-.4 4.3c0 0 0 0 0 0L96 252 72.4 110.1c-.2-1.4-.4-2.8-.4-4.3l0-1.9zm95 14c.7-4 1-8.1 1-12.1l0-1.9c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 1.9c0 4.1 .3 8.1 1 12.1L49.4 264.5C53.2 287.3 72.9 304 96 304s42.8-16.7 46.6-39.5L167 118z" />
    </Icon>
);

export default Tick;