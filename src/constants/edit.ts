/** 审核状态: 10待提交 20待审核 30驳回 40通过 */
export enum AuditStatusType {
  /** 待提交 */
  unSubmit = 10,
  /** 待审核 */
  pending = 20,
  /** 驳回 */
  reject = 30,
  /** 通过 */
  pass = 40,
}

/** 发布状态: 0未发布 1已发布 */
export enum PublishStatusType {
  /** 未发布 */
  unPublish = 0,
  /** 已发布 */
  publish = 1,
}

/** : 10基础阶段 20强化阶段 30冲刺阶段 */
export enum ProfessionTeacherConfig {
  basic = 10,
  reinforcement = 20,
  sprint = 30,
}

export const ProfessionTeacherConfigMap: Record<number, string> = {
  [ProfessionTeacherConfig.basic]: '基础阶段',
  [ProfessionTeacherConfig.reinforcement]: '强化阶段',
  [ProfessionTeacherConfig.sprint]: '冲刺阶段',
};

/** 审核状态 */
export const AuditStatusMap: Record<number, string> = {
  [AuditStatusType.unSubmit]: '待提交审核',
  [AuditStatusType.pending]: '待审核',
  [AuditStatusType.reject]: '审核驳回',
  [AuditStatusType.pass]: '审核通过',
};

/** 操作记录的状态
 *  10 = 创建 20提交审核 30审核驳回 40审核通过 50通过后编编辑
 */
export enum RecordAuditStatus {
  system = 0,
  create = 10,
  submit = 20,
  reject = 30,
  pass = 40,
  reEdit = 50,
}

/** 操作记录的状态 */
export const RecordAuditStatusMap: Record<number, string> = {
  [RecordAuditStatus.system]: '系统记录',
  [RecordAuditStatus.create]: '创建',
  [RecordAuditStatus.submit]: '提交审核',
  [RecordAuditStatus.reject]: '审核驳回',
  [RecordAuditStatus.pass]: '审核通过',
  [RecordAuditStatus.reEdit]: '重新编辑',
};

/** 发布状态 */
export const PublishStatusMap: Record<number, string> = {
  [PublishStatusType.unPublish]: '未发布',
  [PublishStatusType.publish]: '已发布',
};

/** 表单详情页的状态 */
export enum FormPageType {
  /** 查看 */
  view = 10,
  /** 新建 */
  create = 20,
  /** 编辑 */
  edit = 30,
}
