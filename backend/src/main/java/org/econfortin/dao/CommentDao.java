package org.econfortin.dao;

import org.econfortin.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentDao extends CrudRepository<Comment, Long> {

    Comment save(Comment comment);

    Comment findOne(Long photoId);

    List<Comment> findByPhotoId(Long photoId);

}
