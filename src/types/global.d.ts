declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

interface ISeniorTeachScheduleVO {
  reviewMethod: string;
  scheduleUrls: string[];
  type: number;
  startReviewMonth: number;
  endReviewMonth: number;
}
interface ISeniorProfessionItem {
  fileUrl: number;
  auditStatus: string;
  teachScheduleList: ISeniorTeachScheduleVO[];
}
