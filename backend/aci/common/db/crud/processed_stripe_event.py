from sqlalchemy import select
from sqlalchemy.orm import Session

from aci.common.db.sql_models import ProcessedStripeEvent
from aci.common.logging_setup import get_logger

logger = get_logger(__name__)


def record_processed_event(db_session: Session, event_id: str) -> ProcessedStripeEvent:
    """
    Create a new processed Stripe event record.

    Args:
        db_session: The database session.
        event_id: The Stripe event ID that was processed.

    Returns:
        The created ProcessedStripeEvent record.
    """
    processed_event = ProcessedStripeEvent(event_id=event_id)
    db_session.add(processed_event)
    db_session.flush()
    db_session.refresh(processed_event)
    return processed_event


def is_event_processed(db_session: Session, event_id: str) -> bool:
    """
    Check if a Stripe event has already been processed.

    Args:
        db_session: The database session.
        event_id: The Stripe event ID to check.

    Returns:
        True if the event has already been processed, False otherwise.
    """
    statement = select(ProcessedStripeEvent).filter_by(event_id=event_id)
    result = db_session.execute(statement).scalar_one_or_none()
    return result is not None
