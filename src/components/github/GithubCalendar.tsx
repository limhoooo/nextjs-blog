"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";

type Props = {
  id: string;
};

export default function GithubCalendar({ id }: Props) {
  return <GitHubCalendar username={id} />;
}
