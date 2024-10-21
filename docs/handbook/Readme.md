#毕设的博客系统（用作demo，联系中间件和其他内容）

基于Springboot、Thymeleaf、Bootstrap v4.6.0开发

前端模板 https://getbootstrap.com/docs/4.0/examples/

2021年5月13日10:29:21 开始写下第一行代码

2022年9月7日15:03:46 修改为 All In One, 进行Java练习业务项目


https://pandao.github.io/editor.md/ 引入markdown


###已完成
- 管理员
    - 登录
    - 退出
  
    - 博客
        - 新增博客
        - 删除博客
        - 修改博客
        - 查询博客
        - 回收站
    - 分类
        - 新增分类 需优化 添加限制，优化
        - 删除分类 未完成
        - 修改分类 未完成
    - 评论
        - 新增评论
        - 删除评论
        - 审核评论
    
- 普通用户
    - 查看博客
    
    
    
    
    
    
##dd
- Thymeleaf的可选参数






##MybatisPlus 的自定义SQL 分页
```java
/**
 * Vo 层，在comment的基础上多显示一个blogTitle
 */  
@Data
public class ListCommentVo {
    private String commentId;
    private String blogId;
    private String commentator;
    private String email;
    private String phone;
    private String commentBody;
    private Date commentCreateTime;
    private String commentatorIp;
    private String replyBody;
    private Date replyCreateTime;
    private String commentStatus;
    private String isDeleted;
    private String blogTitle;
}

/**
 * Mapper层
 * @return
 */
public interface ListCommentVoMapper extends BaseMapper<ListCommentVo> {

    /**
     * 评论主题和对应的博客标题
     * @return
     */
    IPage<ListCommentVo> listCommentTitle(IPage<ListCommentVo> page, @Param(Constants.WRAPPER) Wrapper<ListCommentVo> wrapper);
}



/**
 * service层
 */
public interface ListCommentVoService extends IService<ListCommentVo> {
    IPage<ListCommentVo> listCommentTitle(Page<ListCommentVo> page, @Param(Constants.WRAPPER) Wrapper<ListCommentVo> wrapper);
}

/**
 * serviceImpl
 */
@Service
public class ListCommentVoVoServiceImpl extends ServiceImpl<ListCommentVoMapper, ListCommentVo> implements ListCommentVoService {

    @Autowired
    ListCommentVoMapper listCommentVoMapper;

    @Override
    public IPage<ListCommentVo> listCommentTitle(Page<ListCommentVo> page, @Param(Constants.WRAPPER) Wrapper<ListCommentVo> wrapper) {
        return listCommentVoMapper.listCommentTitle(page, wrapper);
    }
}





```