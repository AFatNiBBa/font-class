
import { Icon } from "../../index";

/**
 * A component that renders the `comments` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comments?s=regular comments}
 * @preview ![comments](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODguMiAzMDkuMWM5LjgtMTguMyA2LjgtNDAuOC03LjUtNTUuOEM1OS40IDIzMC45IDQ4IDIwNCA0OCAxNzZjMC02My41IDYzLjgtMTI4IDE2MC0xMjhzMTYwIDY0LjUgMTYwIDEyOHMtNjMuOCAxMjgtMTYwIDEyOGMtMTMuMSAwLTI1LjgtMS4zLTM3LjgtMy42Yy0xMC40LTItMjEuMi0uNi0zMC43IDQuMmMtNC4xIDIuMS04LjMgNC4xLTEyLjYgNmMtMTYgNy4yLTMyLjkgMTMuNS00OS45IDE4YzIuOC00LjYgNS40LTkuMSA3LjktMTMuNmMxLjEtMS45IDIuMi0zLjkgMy4yLTUuOXpNMjA4IDM1MmMxMTQuOSAwIDIwOC03OC44IDIwOC0xNzZTMzIyLjkgMCAyMDggMFMwIDc4LjggMCAxNzZjMCA0MS44IDE3LjIgODAuMSA0NS45IDExMC4zYy0uOSAxLjctMS45IDMuNS0yLjggNS4xYy0xMC4zIDE4LjQtMjIuMyAzNi41LTM2LjYgNTIuMWMtNi42IDctOC4zIDE3LjItNC42IDI1LjlDNS44IDM3OC4zIDE0LjQgMzg0IDI0IDM4NGM0MyAwIDg2LjUtMTMuMyAxMjIuNy0yOS43YzQuOC0yLjIgOS42LTQuNSAxNC4yLTYuOGMxNS4xIDMgMzAuOSA0LjUgNDcuMSA0LjV6TTQzMiA0ODBjMTYuMiAwIDMxLjktMS42IDQ3LjEtNC41YzQuNiAyLjMgOS40IDQuNiAxNC4yIDYuOEM1MjkuNSA0OTguNyA1NzMgNTEyIDYxNiA1MTJjOS42IDAgMTguMi01LjcgMjItMTQuNWMzLjgtOC44IDItMTktNC42LTI1LjljLTE0LjItMTUuNi0yNi4yLTMzLjctMzYuNi01Mi4xYy0uOS0xLjctMS45LTMuNC0yLjgtNS4xQzYyMi44IDM4NC4xIDY0MCAzNDUuOCA2NDAgMzA0YzAtOTQuNC04Ny45LTE3MS41LTE5OC4yLTE3NS44YzQuMSAxNS4yIDYuMiAzMS4yIDYuMiA0Ny44bDAgLjZjODcuMiA2LjcgMTQ0IDY3LjUgMTQ0IDEyNy40YzAgMjgtMTEuNCA1NC45LTMyLjcgNzcuMmMtMTQuMyAxNS0xNy4zIDM3LjYtNy41IDU1LjhjMS4xIDIgMi4yIDQgMy4yIDUuOWMyLjUgNC41IDUuMiA5IDcuOSAxMy42Yy0xNy00LjUtMzMuOS0xMC43LTQ5LjktMThjLTQuMy0xLjktOC41LTMuOS0xMi42LTZjLTkuNS00LjgtMjAuMy02LjItMzAuNy00LjJjLTEyLjEgMi40LTI0LjggMy42LTM3LjggMy42Yy02MS43IDAtMTEwLTI2LjUtMTM2LjgtNjIuM2MtMTYgNS40LTMyLjggOS40LTUwIDExLjhDMjc5IDQzOS44IDM1MCA0ODAgNDMyIDQ4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Comments: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
    </Icon>
);

export default Comments;