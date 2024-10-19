
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `staylinked` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/staylinked?s=brands staylinked}
 * @preview ![staylinked](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODIuNyAyOTIuNWwyLjcgMi43LTE3MC0xNjcuM2MtMy41LTMuNS05LjctMy43LTEzLjgtLjVMMTQ0LjMgMTcxYy00LjIgMy4yLTQuNiA4LjctMS4xIDEyLjJsNjguMSA2NC4zYzMuNiAzLjUgOS45IDMuNyAxNCAuNWwuMS0uMWM0LjEtMy4yIDEwLjQtMyAxNCAuNWw4NCA4MS4zYzMuNiAzLjUgMy4yIDktLjkgMTIuMmwtOTMuMiA3NGMtNC4yIDMuMy0xMC41IDMuMS0xNC4yLS40TDYzLjIgMjY4Yy0zLjUtMy41LTkuNy0zLjctMTMuOS0uNUwzLjUgMzAyLjRjLTQuMiAzLjItNC43IDguNy0xLjIgMTIuMkwyMTEgNTEwLjdzNy40IDYuOCAxNy4zLS44bDE5OC0xNjMuOWM0LTMuMiA0LjQtOC43LjctMTIuMnptNTQuNS04My40TDIyNi43IDIuNWMtMS41LTEuMi04LTUuNS0xNi4zIDEuMUwzLjYgMTY1LjdjLTQuMiAzLjItNC44IDguNy0xLjIgMTIuMmw0Mi4zIDQxLjcgMTcxLjcgMTY1LjFjMy43IDMuNSAxMC4xIDMuNyAxNC4zLjRsNTAuMi0zOC44LS4zLS4zIDcuNy02YzQuMi0zLjIgNC42LTguNy45LTEyLjJsLTU3LjEtNTQuNGMtMy42LTMuNS0xMC0zLjctMTQuMi0uNWwtLjEuMWMtNC4yIDMuMi0xMC41IDMuMS0xNC4yLS40TDEwOSAxODAuOGMtMy42LTMuNS0zLjEtOC45IDEuMS0xMi4ybDkyLjItNzEuNWM0LjEtMy4yIDEwLjMtMyAxMy45LjVsMTYwLjQgMTU5YzMuNyAzLjUgMTAgMy43IDE0LjEuNWw0NS44LTM1LjhjNC4xLTMuMiA0LjQtOC43LjctMTIuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Staylinked(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 440 512" {...props}>
            <path d="M382.7 292.5l2.7 2.7-170-167.3c-3.5-3.5-9.7-3.7-13.8-.5L144.3 171c-4.2 3.2-4.6 8.7-1.1 12.2l68.1 64.3c3.6 3.5 9.9 3.7 14 .5l.1-.1c4.1-3.2 10.4-3 14 .5l84 81.3c3.6 3.5 3.2 9-.9 12.2l-93.2 74c-4.2 3.3-10.5 3.1-14.2-.4L63.2 268c-3.5-3.5-9.7-3.7-13.9-.5L3.5 302.4c-4.2 3.2-4.7 8.7-1.2 12.2L211 510.7s7.4 6.8 17.3-.8l198-163.9c4-3.2 4.4-8.7.7-12.2zm54.5-83.4L226.7 2.5c-1.5-1.2-8-5.5-16.3 1.1L3.6 165.7c-4.2 3.2-4.8 8.7-1.2 12.2l42.3 41.7 171.7 165.1c3.7 3.5 10.1 3.7 14.3.4l50.2-38.8-.3-.3 7.7-6c4.2-3.2 4.6-8.7.9-12.2l-57.1-54.4c-3.6-3.5-10-3.7-14.2-.5l-.1.1c-4.2 3.2-10.5 3.1-14.2-.4L109 180.8c-3.6-3.5-3.1-8.9 1.1-12.2l92.2-71.5c4.1-3.2 10.3-3 13.9.5l160.4 159c3.7 3.5 10 3.7 14.1.5l45.8-35.8c4.1-3.2 4.4-8.7.7-12.2z" />
        </Icon>
    </>
}