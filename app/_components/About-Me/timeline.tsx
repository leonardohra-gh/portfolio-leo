
import
{
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";

export function TimelineElement
    (
        {
            items,
        }:
            {
                items: TLItem[]
            }
    )
{
    return (
        <Timeline>
            {items.map(
                (item: TLItem, index: number) =>
                {
                    return (
                        <div key={`tl-item-${index}`}>
                            <TLItemElement item={item} />
                        </div>
                    )
                }
            )
            }
        </Timeline>
    );
}

export function TLItemElement
    (
        {
            item,
        }:
            {
                item: TLItem
            }
    )
{
    return (
        <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
                <TimelineTime>{item.dateStart}</TimelineTime>
                <TimelineTitle>{item.elemTitle}</TimelineTitle>
                <TimelineBody>
                    {item.elemDescription}
                </TimelineBody>
            </TimelineContent>
        </TimelineItem>
    )

}

export interface TLItem
{
    dateStart: string
    elemTitle: string
    elemDescription: string
}