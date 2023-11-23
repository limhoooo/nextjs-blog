"use client";
import { Tooltip as ReactTooltip } from "react-tooltip";
type PlacesType =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";

type Props = {
  id: string;
  place: PlacesType;
  content: string;
};

export default function Tooltip({ id, place, content }: Props) {
  return <ReactTooltip id={id} place={place} content={content} />;
}
